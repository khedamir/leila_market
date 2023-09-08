import { FiltersSliceState } from "@/redux/filters/types";
import { getNewQueryObject } from "@/utils/getNewQueryObjects";
import { isEqual } from "@/utils/isEqual";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useUpdateQueryParams = (items: FiltersSliceState) => {
  const router = useRouter();
  useEffect(() => {
    const updateQueryParams = () => {
      const queryParams = getNewQueryObject(items);

      const currentQueryParams = router.query;

      if (!isEqual(queryParams, currentQueryParams)) {
        router.push({
          pathname: router.pathname,
          query: queryParams,
        });
      }
    };

    updateQueryParams();
  }, [
    items.category,
    items.min_price,
    items.max_price,
    // items.page,
    items.size,
    items.color,
    items.ordering,
    items.search,
  ]);
};
