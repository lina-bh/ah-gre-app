import { Suspense, lazy } from "preact/compat"
import { useState } from "preact/hooks"

const InformationModal = lazy(() => import("./InformationModal"))

const Title = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <div className="flex justify-between px-2 py-1">
      <h1 className="text-3xl">Avery Bus</h1>
      <button onClick={() => setModalVisible(true)} className="text-2xl">
        ℹ️
      </button>
      <Suspense>
        <InformationModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </Suspense>
    </div>
  )
}

export default Title
