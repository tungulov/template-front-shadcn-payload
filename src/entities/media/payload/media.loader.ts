import type { Media } from "@/payload-types";

import { getPayloadClient } from "@/shared/lib/payload-loader";

/**
 * Получает медиа файл по ID
 */
export async function getMediaById(id: string) {
  const payload = await getPayloadClient();
  const media = await payload.findByID({
    collection: "media",
    id,
  });
  return media;
}

/**
 * Получает несколько медиа файлов по ID
 */
export async function getMediaByIds(ids: string[]) {
  const payload = await getPayloadClient();
  const mediaItems = await payload.find({
    collection: "media",
    where: {
      id: {
        in: ids,
      },
    },
  });
  return mediaItems.docs;
}

/**
 * Получает URL медиа файла
 */
export function getMediaUrl(media: Media): string {
  return media.url || "";
}

/**
 * Получает thumbnail URL медиа файла
 */
export function getMediaThumbnailUrl(media: Media): string {
  return media.thumbnailURL || media.url || "";
}

/**
 * Проверяет, является ли файл изображением
 */
export function isImage(media: Media): boolean {
  return media.mimeType?.startsWith("image/") || false;
}

/**
 * Получает размеры изображения
 */
export function getImageDimensions(media: Media) {
  if (!isImage(media)) {
    return null;
  }

  return {
    width: media.width,
    height: media.height,
  };
}
