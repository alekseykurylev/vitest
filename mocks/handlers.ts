import { http, HttpResponse } from "msw";

export const handlers = [
    http.get("/api/users/:id", ({ params }) => {
        return HttpResponse.json({ id: params.id, name: "Aleksey" });
    }),
];