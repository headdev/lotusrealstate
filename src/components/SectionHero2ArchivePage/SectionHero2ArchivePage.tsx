import React, { FC, ReactNode } from "react";
import imagePng from "images/hero-right2.png";
import HeroRealEstateSearchForm, { SearchRealEstateTab } from "components/HeroSearchForm/(real-estate-search-form)/HeroRealEstateSearchForm";

export interface SectionHero2ArchivePageProps {
  className?: string;
  children?: React.ReactNode;
  listingType?: ReactNode;
  currentPage?: "Buy" | "Rent" | "Sell";
  currentTab?: SearchRealEstateTab;
  rightImage?: string;
}

const SectionHero2ArchivePage: FC<SectionHero2ArchivePageProps> = ({
  className = "",
  currentPage,
  currentTab,
  rightImage = imagePng,
}) => {
  const defaultTab: SearchRealEstateTab = "Buy";

  return (
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative ${className}`}
      data-nc-id="SectionHeroArchivePage"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-3xl md:text-5xl xl:text-5xl leading-[90%]">
            Encuentra ahora la casa de tus sueños
          </h2>
          <div className="flex items-center text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            <i className="text-2xl las la-map-marked"></i>
            <span className="ml-2.5">Mexico y el mar caribe</span>
            <span className="mx-5"></span>
            <i className="text-2xl las la-home"></i>
            <span className="ml-2.5">+56 propiedades</span>
          </div>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={imagePng} alt="hero" />
        </div>
      </div>

      <div className="hidden lg:flow-root w-full">
        <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
          <HeroRealEstateSearchForm
            currentTab={currentTab || defaultTab}
            currentPage={currentPage === "Sell" ? undefined : currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHero2ArchivePage;