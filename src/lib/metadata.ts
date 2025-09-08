import { Image } from '@prisma/client';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

type ProductMetaData = {
  title?: string;
  description?: string | null;
  keywords?: string[] | null;
  images?: Image[] | null;
};
export default function customMetadataGenerator({
  title = 'dgShop',
  description = 'a dg shop for',
  keywords = ['dgtal', 'laptap', 'mobile'],
  images = undefined,
}: ProductMetaData): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      type: 'website',
      url: `http://localhost:3000/${title}`,
      images,
    } as OpenGraph,
  };
}
