import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const scrollToElement = (
  e:
    | React.MouseEvent<HTMLAnchorElement, MouseEvent>
    | React.MouseEvent<HTMLSpanElement, MouseEvent>,
  selector: string | undefined,
  router: AppRouterInstance,
): void => {
  if (selector) {
    const element = document.querySelector(selector);
    e.preventDefault();
    element?.scrollIntoView({ behavior: "smooth" });

    router.push(`${selector}`);
  } else {
    // Scroll back up to the top of the page
    const element = document.querySelector("body");
    element?.scrollIntoView({ behavior: "smooth" });

    router.push("");
  }
};
