"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.JWT_SECRET);
const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
  },
  maxAge: 60 * 60 * 24 * 1000,
};

const token = {
  name: "token",
  options: {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
  },
  maxAge: 60 * 60 * 24 * 1000,
};

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

//helper functions to create, verify and delete sessions
export async function createSession(userId: number) {
  try {
    const expires = new Date(Date.now() + cookie.maxAge);
    const session = await encrypt({ userId, expires });

    cookies().set(cookie.name, session, {
      ...cookie.options,
      sameSite: "lax",
      expires,
    });
  } catch (error) {
    console.log("error redirecting user", error);
  }
}

export async function verifySession() {
  const userCookie = cookies().get(cookie.name)?.value;
  const session = await decrypt(userCookie);

  if (!session?.userId) {
    redirect("/signin");
  }

  return session;
}

export async function deleteSession() {
  cookies().delete(cookie.name);
}