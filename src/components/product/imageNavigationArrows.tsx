import { Previous, Next } from '../../assets/icons';
import { ButtonIcon } from '../buttonIcon';

interface Props {
  changeIndex: (buttonType?: string) => void;
  isLightbox: boolean;
}

export const ImageNavigationArrow = (props: Props) => {
  const sharedStyles =
    'absolute v-align-middle bg-white rounded-full text-center shadow-md text-veryDarkBlue hover:text-orange';
  const alternateStyles = props.isLightbox ? 'w-14 h-14' : 'w-9 h-9 sm:hidden';

  return (
    <>
      <ButtonIcon
        buttonClass={`${sharedStyles} ${
          props.isLightbox ? 'left-0 -translate-x-1/2' : 'left-4'
        } ${alternateStyles}`}
        handleClick={props.changeIndex}
        icon={<Previous svgClass='w-[10px] -mt-[3px] -ml-[2px]' />}
      />
      <ButtonIcon
        buttonClass={`${sharedStyles} ${
          props.isLightbox ? 'right-0 translate-x-1/2' : 'right-4'
        } ${alternateStyles}`}
        handleClick={() => props.changeIndex('next')}
        icon={<Next svgClass='w-[10px] -mt-[3px] -mr-[2px]' />}
      />
    </>
  );
};
