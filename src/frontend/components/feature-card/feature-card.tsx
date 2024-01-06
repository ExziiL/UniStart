import Image from "next/image";
import * as React from "react";

interface FeatureCardProps {
	children: React.ReactNode;
}

interface TitleProps {
	children: React.ReactNode;
}

interface ImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
}

const Title: React.FC<TitleProps> = ({ children }) => {
	return <h2>{children}</h2>;
};

const ImageComponent: React.FC<ImageProps> = ({ src, alt, width, height }) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
		/>
	);
};

const FeatureCard: React.FC<FeatureCardProps> & {
	Title: React.FC<TitleProps>;
	Image: React.FC<ImageProps>;
} = ({ children }) => {
	return <div className="flex flex-col">{children}</div>;
};

FeatureCard.Title = Title;
FeatureCard.Image = ImageComponent;

export default FeatureCard;
