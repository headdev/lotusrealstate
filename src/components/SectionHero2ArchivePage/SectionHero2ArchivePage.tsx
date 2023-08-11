import React, { FC, ReactNode } from "react";
// Imágenes 
import heroImage from "images/hero-right2.png";

// Componentes
import HeroRealEstateSearchForm, {
  SearchRealEstateTab
  } from "components/HeroSearchForm/(real-estate-search-form)/HeroRealEstateSearchForm"; 

// Interfaces
interface Props {
  className?: string;
  children?: ReactNode;
  currentPage: "Buy" | "Rent";
  listingType?: ReactNode;
  currentTab: SearchRealEstateTab;
  rightImage?: string;
}

const SectionHero2ArchivePage: FC<Props> = ({
  className,
  children,
  currentPage,
  currentTab,
  rightImage = heroImage,
  listingType,
}) => {
  
  return (
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative ${className}`}
      data-nc-id="SectionHeroArchivePage"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-5xl leading-[90%]">
           Encuentra la casa de tus sueños
          </h2>
          <div className="flex items-center text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            <i className="text-2xl las la-map-marked"></i>
            <span className="ml-2.5">Mexico y el caribe </span>
            <span className="mx-5"></span>
            {listingType ? (
              listingType
            ) : (
              <>
                <i className="text-2xl las la-home"></i>
                <span className="ml-2.5">+56 propiedades</span>
              </>
            )}
          </div>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={rightImage} alt="hero" />
        </div>
      </div>

      <div className="hidden lg:flow-root w-full">
        <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
          <HeroRealEstateSearchForm currentPage={currentPage} currentTab={currentTab} />
        </div>
      </div>
    </div>
  );
};

export default SectionHero2ArchivePage;