export async function GET(request) {
    const { searchParams } = new URL(request.url)

    // for specific params
    let latitude = searchParams.get('latitude');
    let longitude = searchParams.get('longitude')

    return Response.json({
        latitude,
        longitude
    })
}