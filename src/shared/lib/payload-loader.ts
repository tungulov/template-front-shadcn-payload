import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import config from "@/payload.config";

/**
 * Инициализирует и возвращает экземпляр Payload
 * Использует кэширование для оптимизации производительности
 */
export async function getPayloadClient() {
  // const headers = await getHeaders()
  const payloadConfig = await config;
  return await getPayload({ config: payloadConfig });
}

/**
 * Получает текущего пользователя
 */
export async function getCurrentUser() {
  const payload = await getPayloadClient();
  const headers = await getHeaders();
  const { user } = await payload.auth({ headers });
  return user;
}

/**
 * Проверяет, аутентифицирован ли пользователь
 */
export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}

/**
 * Получает конфигурацию Payload
 */
export async function getPayloadConfig() {
  return await config;
}
