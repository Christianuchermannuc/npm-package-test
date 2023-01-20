import { FC, PropsWithChildren } from "react";
type DashboardProps = {
    title: string;
    component: FC[];
};
declare const Dashboard: (props: PropsWithChildren<DashboardProps>) => JSX.Element;
export default Dashboard;
