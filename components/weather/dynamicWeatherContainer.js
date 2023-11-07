import dynamic from "next/dynamic";

const DynamicWeatherContainer = dynamic(() => import('@/components/weather/weatherContainer.js'), {
    ssr: false,
  })

export default DynamicWeatherContainer