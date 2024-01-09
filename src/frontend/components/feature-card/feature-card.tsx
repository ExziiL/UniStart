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
}

const Title: React.FC<TitleProps> = ({ children }) => {
	return <h2 className="absolute bottom-0 mb-2 ml-2 text-lg font-medium text-background">{children}</h2>;
};

const ImageComponent: React.FC<ImageProps> = ({ src, alt }) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={100}
			height={100}
			className="h-full w-full rounded-lg object-cover object-center"
		/>
	);
};

const FeatureCard: React.FC<FeatureCardProps> & {
	Title: React.FC<TitleProps>;
	Image: React.FC<ImageProps>;
} = ({ children }) => {
	return <div className="relative h-36 w-full rounded-lg border">{children}</div>;
};

FeatureCard.Title = Title;
FeatureCard.Image = ImageComponent;

export default FeatureCard;
