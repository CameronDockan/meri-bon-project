export async function GET(request) {
    const { searchParams } = new URL(request.url)

    // to respond with all params
    const obj = Object.fromEntries(searchParams.entries())

    return Response.json(obj)
}