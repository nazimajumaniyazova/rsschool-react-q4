interface HttpResponse<T> extends Response {
  parsedBody?: T;
  status: number;
}

export async function http<T>(url: string): Promise<HttpResponse<T>> {
  const res: HttpResponse<T> = await fetch(url);
  res.parsedBody = await res.json();
  return res;
}
