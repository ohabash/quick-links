// console.log('ng-home');




app.controller('home', function ($scope, $rootScope, $location, $firebaseObject, $firebaseArray, $timeout) {
	console.log("ng-home.js");
	// if($rootScope.isMobile){
	// 	$location.path('/home-m');
	// }else{
	// 	$location.path('/');
	// }

	$scope.one = "";
	$scope.two = "";
	$scope.show = false;
	$scope.go_url = $scope.one+$scope.two;

	$scope.update_store = function(x) {
		$scope.one = x;
		$scope.go_url = $scope.one+$scope.two;
		$scope.show = true;
	};
	$scope.update_path = function(x) {
		$scope.two = x;
		$scope.go_url = $scope.one+$scope.two;
	};
	$scope.refresh = function(x) {
		$scope.one = "";
		$scope.two = "";
		$scope.show = false;
		$scope.search_stores = "";
		$scope.search_paths = "";
	};
	// $scope.quick_order = function(x) {
	// 	$scope.two = x;
	// 	id = $scope.id;
	// 	$scope.go_url = $scope.one+$scope.two;
	// };



	$scope.others = [
		{
           "name" : "Partner Portal",
            "url" : "https://partners.bigcommerce.com/English/"
        },{
           "name" : "DevTools",
            "url" : "https://devtools.bigcommerce.com/my/apps"
        },{
           "name" : "Domains",
            "url" : "https://manage.bigcommerce.com/account/stores/999625808/domains"
        },{
           "name" : "SSL Certificates",
            "url" : "https://manage.bigcommerce.com/domains/61077ca2-68ca-425f-9f25-c77e7853db4d/ssl_certs/add"
        },{
           "name" : "Stencil Docs",
            "url" : "stencil.bigcommerce.com"
        },{
           "name" : "API Docs",
            "url" : "https://developer.bigcommerce.com/api/"
        }
	]

	$scope.stores = [
       {
           "name" : "Le-Vel Gear",
            "url" : "https://le-velgear.com"
        },{
           "name" : "Shop Nerium",
            "url" : "https://shopnerium.com"
        },{
           "name" : "WV Gear",
            "url" : "https://wvgear.com"
        },{
           "name" : "SUCCESS Store",
            "url" : "https://store.success.com"
        },{
           "name" : "Pruvit Gear",
            "url" : "https://pruvitgear.com"
        },{
           "name" : "Shop My TLC",
            "url" : "null"
        },{
           "name" : "Jim Rohn Store",
            "url" : "https://store.jimrohn.com"
        },{
           "name" : "MyTNSHOP",
            "url" : "https://mytnshop.com"
        },{
           "name" : "Shop Traci Lynn",
            "url" : "https://shoptracilynn.com"
        },{
            "name" : "Young Living Tools",
            "url" : "https://younglivingtools.com"
        },{
            "name" : "Zurvita Gear",
            "url" : "https://zurvitagear.com"
        },{
            "name" : "Team BeachBody Tools",
            "url" : "https://teambeachbodytools.com"
        },{
            "name" : "Direct Selling News Store",
            "url" : "https://store.directsellingnews.com"
        },{
            "name" : "It Works! Custom Print",
            "url" : "https://customprint.itworks.com"
        },{
            "name" : "Monat Gear",
            "url" : "https://monatgear.com"
        },{
            "name" : "LegalShield Store",
            "url" : "https://legalshield4success.com"
        }
    ]

	$scope.paths = [
		{
			"name" : "dashboard",
			"path" : "/manage/dashboard",
			"class" : "featured"
		},{
			"name" : "orders",
			"path" : "/manage/orders",
			"class" : "featured"
		},{
			"name" : "orders (add)",
			"path" : "/manage/orders/add-order"
		},{
			"name" : "products",
			"path" : "/manage/products",
			"class" : "featured"
		},{
			"name" : "products (add)",
			"path" : "/manage/products/add"
		},{
			"name" : "products (options)",
			"path" : "/manage/products/options"
		},{
			"name" : "products (filtering)",
			"path" : "/manage/products/product-filtering"
		},{
			"name" : "products (brands)",
			"path" : "/manage/products/brands"
		},{
			"name" : "products (reviews)",
			"path" : "/manage/products/product-reviews"
		},{
			"name" : "Product Categories",
			"path" : "/manage/categories",
			"class" : "featured"
		},{
			"name" : "customers",
			"path" : "/manage/customers",
			"class" : "featured"
		},{
			"name" : "customers (add)",
			"path" : "/manage/add"
		},{
			"name" : "customers (groups)",
			"path" : "/manage/groups"
		},{
			"name" : "storefront (My Themes)",
			"path" : "/manage/storefront-manager/my-themes",
			"class" : "featured"
		},{
			"name" : "storefront (Theme Marketplace)",
			"path" : "/manage/marketplace/themes"
		},{
			"name" : "storefront (logo)",
			"path" : "/manage/storefront-manager/logo"
		},{
			"name" : "storefront (Carousel)",
			"path" : "/manage/storefront-manager/carousel",
			"class" : "featured"
		},{
			"name" : "storefront (Social)",
			"path" : "/manage/storefront-manager/social"
		},{
			"name" : "storefront (Footer Scripts)",
			"path" : "/manage/storefront-manager/scripts",
			"class" : "featured"
		},{
			"name" : "storefront (Web Pages)",
			"path" : "/manage/content/pages"
		},{
			"name" : "storefront (Blog)",
			"path" : "/manage/content/blog"
		},{
			"name" : "storefront (Image Manager)",
			"path" : "/manage/content/pages/image-manager"
		},{
			"name" : "storefront (Email Templates)",
			"path" : "/manage/storefront-manager/email-templates"
		},{
			"name" : "Marketing (Banners)",
			"path" : "/manage/marketing/banners",
			"class" : "featured"
		},{
			"name" : "Marketing (Coupon Codes)",
			"path" : "/manage/marketing/coupons"
		},{
			"name" : "Marketing (Cart-Level Discounts)",
			"path" : "/manage/marketing/discounts"
		},{
			"name" : "Marketing (Email Marketing)",
			"path" : "/manage/settings/email-marketing"
		},{
			"name" : "Marketing (Gift Certificates)",
			"path" : "/manage/settings/gift-certificates"
		},{
			"name" : "Analytics (Overview)",
			"path" : "/manage/analytics/overview"
		},{
			"name" : "Analytics (Insights)",
			"path" : "/manage/messaging/insights"
		},{
			"name" : "Analytics (Real Time)",
			"path" : "/manage/analytics/realtime"
		},{
			"name" : "Apps (Marketplace)",
			"path" : "/manage/marketplace/apps?featured=1",
			"class" : "featured"
		},{
			"name" : "Apps (My Apps)",
			"path" : "/manage/marketplace/apps/my-apps"
		},{
			"name" : "Store Setup (Store Profile)",
			"path" : "/manage/settings/store-profile"
		},{
			"name" : "Store Setup (Store Settings)",
			"path" : "/manage/settings/store"
		},{
			"name" : "Store Setup (Payments)",
			"path" : "/manage/settings/payment#%2Fng-payments"
		},{
			"name" : "Store Setup (Shipping)",
			"path" : "/manage/settings/shipping"
		},{
			"name" : "Store Setup (Tax)",
			"path" : "/manage/settings/tax"
		},{
			"name" : "Store Setup (Currencies)",
			"path" : "/manage/settings/currencies"
		},{
			"name" : "Store Setup (Accounting)",
			"path" : "/manage/settings/accounting"
		},{
			"name" : "Advanced Settings (Web Analytics)",
			"path" : "/manage/settings/analytics"
		},{
			"name" : "Advanced Settings (Checkout)",
			"path" : "/manage/settings/checkout"
		},{
			"name" : "Advanced Settings (Inventory)",
			"path" : "/manage/settings/inventory"
		},{
			"name" : "Advanced Settings (Returns)",
			"path" : "/manage/settings/return-settings"
		},{
			"name" : "Advanced Settings (Comments)",
			"path" : "/manage/settings/comments"
		},{
			"name" : "Advanced Settings (API Accounts)",
			"path" : "/manage/settings/auth/api-accounts"
		},{
			"name" : "Advanced Settings (Legacy API Settings)",
			"path" : "/manage/settings/legacy-api"
		},{
			"name" : "Advanced Settings (Export Templates)",
			"path" : "/manage/settings/export-templates"
		},{
			"name" : "Advanced Settings (Affiliate Conversion Tracking)",
			"path" : "/manage/settings/affiliate-settings"
		},{
			"name" : "Advanced Settings (Account Signup Form)",
			"path" : "/manage/settings/account-signup-form"
		},{
			"name" : "Advanced Settings (Live Chat)",
			"path" : "/manage/settings/live-chat"
		},{
			"name" : "Advanced Settings (Order Notifications)",
			"path" : "/manage/settings/order-notifications"
		},{
			"name" : "Server Settings (Domain Name)",
			"path" : "/manage/settings/redirects"
		},{
			"name" : "Server Settings (301 Redirects)",
			"path" : "/manage/settings/redirects"
		},{
			"name" : "Server Settings (Email & DNS Records)",
			"path" : "/manage/settings/dns"
		},{
			"name" : "Server Settings (SSL Certificates)",
			"path" : "/manage/settings/dns"
		},{
			"name" : "Server Settings (Store Logs)",
			"path" : "/manage/settings/logs"
		},{
			"name" : "Server Settings (File Access (WebDAV))",
			"path" : "/manage/settings/file-access"
		},{
			"name" : "Account Settings (User Rolls)",
			"path" : "/manage/settings/users",
			"class" : "featured"
		},{
			"name" : "Account Settings (Update Profile)",
			"path" : "/manage/settings/users"
		},{
			"name" : "Account Settings (Change Password)",
			"path" : "/manage/settings/users"
		}
    ]




    // notices
    // get notices
	var ref = firebase.database().ref().child('notices');
	$scope.notices_obj = $firebaseObject(ref);
	$rootScope.notices = $firebaseArray(ref);

	$scope.new_notice = function(notice) {
		console.log(notice);
		// $rootScope.notices.$add(notice);
		$scope.notices_obj[notice.slug] = notice;
		$scope.notices_obj.$save();
	};






});





















