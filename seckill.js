const dayjs = require("dayjs");
const { By } = require("selenium-webdriver");
const selenium = require("selenium-webdriver");

const {
	mapLabelToValue,
	mapLabelToObj,
	platformLocationOptions,
	cartLocationOptions,
	selectAllBtnOptions,
	payBtnOptions,
	checkoutBtnTextOptions,
	loginBtnTextOptions,
	timeWaitToPayOptions,
	JD,
	TaoBao
} = require("./config.js");

const driver = new selenium.Builder().forBrowser("chrome").build();

const platformName = JD;
const buyTime = "2023-06-05 09:15:00";

// 最大化浏览器
driver.manage().window().maximize();

driver.get(mapLabelToValue(platformLocationOptions, platformName));

// 类似于python中time的sleep函数
const sleep = (time) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time * 1000);
	});
};

// 登录
const login = async () => {
	const loginText = mapLabelToValue(loginBtnTextOptions, platformName);
	const loginBtn = driver.findElement(By.linkText(loginText));
	if (loginBtn) loginBtn.click();
	console.log("请在20秒内完成扫码");
	await sleep(20);
	const cartLocation = mapLabelToValue(cartLocationOptions, platformName);
	driver.get(cartLocation);
	await sleep(3);
	//   点击全选按钮
	const selectAllBtnObj = mapLabelToObj(selectAllBtnOptions, platformName);
	const locator = By[selectAllBtnObj.byWay](selectAllBtnObj.value);
	const ele = await driver.findElement(locator);
	ele.click();
	console.log("登录成功：", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"));
	await sleep(2);
	buy(buyTime);
};

// 秒杀
const buy = async (buyTime) => {
	while (true) {
		const now = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
		if (now === buyTime) {
			const checkoutBtnText = mapLabelToValue(checkoutBtnTextOptions, platformName);
			const locator = By.linkText(checkoutBtnText);
			if (driver.findElement(locator)) driver.findElement(locator).click();
			await sleep(mapLabelToValue(timeWaitToPayOptions, platformName));
			submit();
			break;
		}
	}
};

// 提交订单
const submit = async () => {
	const payBtnObj = mapLabelToObj(payBtnOptions, platformName);
	const locator = By[payBtnObj.byWay](payBtnObj.value);
	while (true) {
		const eles = await driver.findElements(locator);

		if (Array.isArray(eles) && eles.length > 0) {
			driver.findElement(locator).click();
			console.log("抢购时间：", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"));
			await sleep(1000);
			break;
		}
	}
};

login();
