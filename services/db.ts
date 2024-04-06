/// <reference lib="deno.unstable" />
const kv = await Deno.openKv();

export async function getTextOrURL(text_or_url: string) {
  const res = await kv.get<string>([text_or_url]);
  return res.value;
}

export async function setTextOrURL(text_or_url: string, value: string) {
  await kv.set([text_or_url], value);
}