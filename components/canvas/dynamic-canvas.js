import dynamic from "next/dynamic";

const DynamicCanvas = dynamic(() => import('@/components/canvas/canvas.js'), {
    ssr: false,
  })

export default DynamicCanvas