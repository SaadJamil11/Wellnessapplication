import PageHeader from '../components/PageHeader'

export default function Kids() {
  return (
    <div className="flex flex-col min-h-full">
      <PageHeader title="My Kids" />
      <div className="p-4 md:p-6">
        <p className="text-gray-500">My Kids content placeholder</p>
      </div>
    </div>
  )
}
