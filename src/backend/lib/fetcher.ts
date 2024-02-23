import { Url } from "url";

type FetchParams = [string, Object];

export const fetcher = async (...args: FetchParams) => {
    const [url, options] = args;

    const res = await fetch(url, options);
    return {raw: res, json: await res.json()};
};
