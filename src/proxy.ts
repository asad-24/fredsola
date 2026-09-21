import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { isLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [firstSegment, ...rest] = pathname.split("/").filter(Boolean);

  if (!isLocale(firstSegment) || firstSegment === "en") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${rest.join("/")}`.replace(/\/$/, "") || "/";

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|images|.*\\..*).*)"],
};
