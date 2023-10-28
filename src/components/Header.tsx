import React from 'react';

import MainNav from './main-nav';

const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-backround/95 backdrop-blur supports-[backdrop-filter]:bg-backround/60 ">
			<div className="container flex h-14 items-center justify-center">
				<MainNav />
				{/* <MobileNav /> */}
			</div>
		</header>
	);
};

export default Header;
