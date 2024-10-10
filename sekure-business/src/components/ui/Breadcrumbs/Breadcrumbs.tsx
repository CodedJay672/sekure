"use client";

import React, { useEffect, useState, useId } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";
import Link from "next/link";

const CustomBreadcrumb = () => {
  const pathname = usePathname();
  const id = useId();
  const [page, setPage] = useState<string>("");
  const [pathArray, setPathArray] = useState<string[]>([]);

  useEffect(() => {
    const path = pathname
      .slice(1)
      .split("/")
      .map((str) => {
        if (str === "") return "accueil";
        return str;
      });
    setPathArray(Array.from(new Set(path)));
    setPage(path.pop() || "");
  }, [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathArray.map((path, index) => (
          <React.Fragment key={`${id}-${index}`}>
            {index + 1 === pathArray.length ? (
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold text-[24px] leading-[27px] tracking-[-1px]">
                  {page.charAt(0).toUpperCase()}
                  {page.slice(1)}
                </BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="font-semibold text-[24px] leading-[27px] tracking-[-1px] text-[#CFCFCF]"
                      href={`/${path}`}
                    >
                      {path.charAt(0).toUpperCase()}
                      {path.slice(1)}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
