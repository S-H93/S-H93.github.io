import Sidebar from './Sidebar/sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  )
}