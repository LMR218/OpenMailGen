'use server';

import { cookies } from 'next/headers';

export async function getCookie(name: string) {
  return (await cookies()).get(name)?.value;
}

export async function setCookie(name: string, value: string) {
  (await cookies()).set(name, value);
}

export async function deleteCookie(name: string) {
  (await cookies()).delete(name);
}

export async function getAllCookies() {
  return (await cookies()).getAll();
}

export async function clearCookies() {
  (await cookies()).getAll().forEach(async (cookie) => {
    (await cookies()).delete(cookie.name);
  });
}
