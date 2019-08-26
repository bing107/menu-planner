import React, { FunctionComponent } from 'react';
import { StyledCardWrapper } from './styles';

type CarouselPropType = {
  items: ReadonlyArray<CarouselItemType>;
};

type CarouselItemType = {
  id: number;
  title: string;
  imgUrl: string;
};

const Carousel: FunctionComponent<CarouselPropType> = ({ items }) => {
  return (
    <div data-testid="items-list">
      {items.map(item => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
};

const Card: FunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <StyledCardWrapper data-testid="card">
      <span>{data.title}</span>
    </StyledCardWrapper>
  );
};

export default Carousel;
