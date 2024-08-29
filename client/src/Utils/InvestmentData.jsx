import { nanoid } from "nanoid";

export const subLinks = [
  {
    pageId: nanoid(),
    page: "create",
    links: [
      {
        id: nanoid(),
        label: "create headline",
        url: "create/create-headline",
        view: true,
      },
      {
        id: nanoid(),
        label: "create schedule",
        url: "create/create-schedule",
        view: true,
      },
      {
        id: nanoid(),
        label: "create sub groups",
        url: "create/sub-groups",
        view: true,
      },
      {
        id: nanoid(),
        label: "create link",
        url: "create/link",
        view: true,
      },
      {
        id: nanoid(),
        label: "promotion",
        url: "create/promotion",
        view: true,
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "delete",
    links: [
      {
        id: nanoid(),
        label: "delete headline",
        url: "delete/delete-headline",
        view: true,
      },
      {
        id: nanoid(),
        label: "delete schedule",
        url: "delete/delete-schedule",
        view: true,
      },
      {
        id: nanoid(),
        label: "delete sub groups",
        url: "delete/delete-subgroups",
        view: true,
      },
      {
        id: nanoid(),
        label: "delete entire group",
        url: "delete/entire-group",
        view: true,
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "views",
    links: [
      {
        id: nanoid(),
        label: "headline news",
        url: "views/headline-news",
        view: true,
      },
      {
        id: nanoid(),
        label: "view schedule",
        url: "views/view-schedule",
        view: true,
      },
      {
        id: nanoid(),
        label: "view all groups",
        url: "views/view-all-groups",
        view: true,
      },
      {
        id: nanoid(),
        label: "messages",
        url: "views/messages",
        view: true,
      },
      {
        id: nanoid(),
        label: "view all links",
        url: "views/view-all-links",
        view: true,
      },
    ],
  },
];
