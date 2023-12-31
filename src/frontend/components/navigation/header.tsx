import React from 'react';

import MainNav from './main-nav';
import MobileNav from './mobile-nav';

const Header = () => {
	return (
		<header className="bg-backround/95 supports-[backdrop-filter]:bg-backround/60 sticky top-0 z-50 w-full border-b backdrop-blur ">
			<div className="container flex h-14 items-center md:justify-center">
				<MainNav />
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
