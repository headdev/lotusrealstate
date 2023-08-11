import React, { FC, useEffect, ReactNode } from "react";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
//section para experiencias//
//import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage";
// section para real
import SectionHero2ArchivePage from "components/SectionHero2ArchivePage/SectionHero2ArchivePage";
import HeroRealEstateSearchForm, { SearchRealEstateTab } from "components/HeroSearchForm/(real-estate-search-form)/HeroRealEstateSearchForm";

import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionGridHasMap from "containers/ListingRealEstatePage/SectionGridHasMap";
import { Helmet } from "react-helmet";


export interface ListingExperiencesMapPageProps {
  className?: string;
  currentPage?: "Buy"  | "Rent";
  currentTab?: SearchRealEstateTab; 
  listingType?: ReactNode;

}

const ListingExperiencesMapPageProps: FC<ListingExperiencesMapPageProps> = ({
  className = "",
  currentTab = "Buy",
  currentPage= "Buy",
  listingType= "", 
}) => {
  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body) {
      $body.className = "theme-cyan-blueGrey";
    }
    return () => {
      if ($body) {
        $body.className = "";
      }
    };
  }, []);

  return (
    <div
      className={`nc-ListingExperiencesPage relative overflow-hidden ${className}`}
      data-nc-id="ListingExperiencesPage"
    >
      <Helmet>
        <title>lotus revenue Real state app</title>
      </Helmet>
      <BgGlassmorphism />


      {/* SECTION HERO */}
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <SectionHero2ArchivePage
          currentPage={currentPage}
          currentTab={currentTab} />
      </div>

      {/* SECTION */}
      <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
        <SectionGridHasMap />
      </div>

      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
            uniqueClassName="ListingExperiencesMapPage"
          />
        </div>

     

        {/* SECTION */}
        <SectionSubscribe2 className="py-24 lg:py-28" />

        {/* SECTION */}
        <div className="relative py-16 mb-24 lg:mb-28">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>
      </div>
    </div>
  );
};

export default ListingExperiencesMapPageProps;