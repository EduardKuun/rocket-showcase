export const rootConfig = {
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  graphqlUrl: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  graphqlPollInterval: Number(process.env.NEXT_PUBLIC_GRAPHQL_POLL_INTERVAL || 10000),
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  mapboxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  staticFileRoute: process.env.NEXT_PUBLIC_STATIC_FILE_ROUTE,
};
