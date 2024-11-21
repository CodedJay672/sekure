"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.JWT_SECRET);
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session: any) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (error) {
    return null;
  }
}

export async function setCookie(name: string, value: object) {
  const expires = new Date(Date.now() + MAX_AGE * 1000);
  const session = await encrypt({ value, expires });

  cookies().set(name, session, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    expires,
    path: "/",
  });
}

export async function getCookie(name: string) {
  const userCookie = cookies().get(name)?.value;
  const session = await decrypt(userCookie);

  if (!session) {
    throw new Error("invalid session");
  }

  return JSON.stringify(session);
}

//helper functions to create, verify and delete sessions
export async function createSession(token: string) {
  try {
    await setCookie("session", { token });
  } catch (error) {
    console.log("error authenticating user", error);
  }
}

export async function verifySession(name: string) {
  const session = await getCookie(name);
  const parsedSession = JSON.parse(session);

  if (!parsedSession?.value?.token) {
    redirect("/signin");
  }

  return parsedSession;
}

export async function deleteSession(name: string) {
  cookies().delete(name);
}
