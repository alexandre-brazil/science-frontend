import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 1. Pega o token dos cookies
  const token = request.cookies.get("@Codomemoria:token")?.value;

  // 2. Define as rotas que são públicas
  const isLoginPage = request.nextUrl.pathname === "/login";
  const isMobilePage = request.nextUrl.pathname.startsWith("/mobile");
  const isPublicAsset = request.nextUrl.pathname.includes("."); // Imagens, etc.

  // 3. Lógica de Redirecionamento
  if (!token) {
    // Se não está logado e tenta acessar algo que NÃO é login nem mobile
    if (!isLoginPage && !isMobilePage && !isPublicAsset) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (token && isLoginPage) {
    // Se já está logado e tenta ir para o login, manda para o dashboard
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// 4. Configuração de quais rotas o middleware deve vigiar
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
