export interface PageRoute {
  title: string;
  count: number | null;
  icon: any;
  route: string;
}

export interface PageSection {
  name: string;
  routers: PageRoute[];
}
/// tờ trình
export const lstPage: PageSection[] = [
  {
    name: "Tờ trình",
    routers: [
      {
        title: "Soạn thảo",
        count: null,
        icon: "faEdit",
        route: "/totrinh/them-moi",
      },
      {
        title: "Chờ xử lý",
        count: 5,
        icon: "faClock",
        route: "/totrinh/cho-xu-ly",
      },
      {
        title: "Đang xử lý",
        count: null,
        icon: "faSpinner",
        route: "/totrinh/dang-xu-ly",
      },
      {
        title: "Đã phê duyệt",
        count: null,
        icon: "faCheckCircle",
        route: "/totrinh/da-ky-duyet",
      },
      {
        title: "Thu hồi",
        count: null,
        icon: "faUndo",
        route: "/totrinh/thu-hoi",
      },
      {
        title: "Báo cáo",
        count: null,
        icon: "faChartBar",
        route: "/totrinh/bao-cao",
      },
    ],
  },
];
