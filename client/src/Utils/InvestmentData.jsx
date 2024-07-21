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
      },
      {
        id: nanoid(),
        label: "create schedule",
        url: "create/create-schedule",
      },
      {
        id: nanoid(),
        label: "create sub groups",
        url: "create/create-sub-groups",
      },
      {
        id: nanoid(),
        label: "promotion",
        url: "create/promotion",
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
      },
      {
        id: nanoid(),
        label: "delete schedule",
        url: "delete/delete-schedule",
      },
      {
        id: nanoid(),
        label: "delete sub groups",
        url: "delete/delete-subgroups",
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
      },
      {
        id: nanoid(),
        label: "view schedule",
        url: "views/view-schedule",
      },
      {
        id: nanoid(),
        label: "view subgroup",
        url: "views/view-subgroup",
      },
    ],
  },
];
