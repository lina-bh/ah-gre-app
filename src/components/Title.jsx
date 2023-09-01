import InformationModal from "./InformationModal"

const Title = () => (
  <div className="flex justify-between px-2 py-1">
    <h1 className="text-3xl">Avery Bus</h1>
    <InformationModal className="text-2xl">
      <i className="bi bi-info-circle-fill"></i>
    </InformationModal>
  </div>
)

export default Title
