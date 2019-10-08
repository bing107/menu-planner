import React, { FunctionComponent } from 'react';
import { StyledCardWrapper, StyledCarouselContainer } from './styles';

type CarouselPropType = {
  items: ReadonlyArray<CarouselItemType>;
};

type CarouselItemType = {
  id: number;
  joke: string;
  imgUrl: string;
};

const Carousel: FunctionComponent<CarouselPropType> = ({ items }) => {
  return (
    <StyledCarouselContainer data-testid="items-list">
      {items.map(item => {
        return <Card key={item.id} data={item} />;
      })}
    </StyledCarouselContainer>
  );
};

const Card: FunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <StyledCardWrapper data-testid="card">
      <span>{data.joke}</span>
    </StyledCardWrapper>
  );
};

export default Carousel;
