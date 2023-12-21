import { PageType } from "../data/pages";
import FollowOnGithub from "./FollowOnGithub";

interface Props {
  page: PageType;
}

function Page({ page }: Props) {
  return (
    <>
      <FollowOnGithub />
      {page.module}
    </>
  );
}

export { Page };
