import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";

function AppLayout () {
  return (
    <div>
        <PageNav />
        <AppNav />
        <h1>Welcome to the App Layout</h1>
        <p>This is the main layout for the application.</p>
    </div>
  )
}

export default AppLayout;