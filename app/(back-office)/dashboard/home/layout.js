import HomeNavBar from "@/components/dashboard/HomeNavBar";

export default function Layout({ children }) {
  return (
    <div>
      <HomeNavBar />
      <div>{children}</div>
    </div>
  );
}
