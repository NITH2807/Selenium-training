package org.base;

import java.awt.dnd.DragSourceDropEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class baseclass {

	protected static WebDriver driver;
	private static Actions a;
	private static JavascriptExecutor js;

	public static void launchbrowser() {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();

	}

	public static void windowMaximize() {
		driver.manage().window().maximize();

	}

	public static void launchUrl(String Url) {
		driver.get(Url);
	}

	public static String pagetitle() {
		String title = driver.getTitle();
		return title ;
	}

	public static String pageUrl() {
		String url = driver.getCurrentUrl();
		return url;
	}

	public static void passtext(String txt, WebElement g) {
		g.sendKeys(txt);
	}

	public static void CloseEntireBrowser() {
		driver.quit();
	}

	public static void clickbtn(WebElement ele) {
		ele.click();
	}

	public static void screenshot(String imgName) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File image = ts.getScreenshotAs(OutputType.FILE);
		File f = new File("location+ imgName.png");
		FileUtils.copyFile(image, f);
	}

	public static void movethecurser(WebElement targetwebelementElement) {
		a = new Actions(driver);
		a.moveToElement(targetwebelementElement).perform();
	}

	public static void dragdrop(WebElement dragwebeleElement, WebElement dropElement) {
		a = new Actions(driver);
		a.dragAndDrop(dragwebeleElement, dropElement).perform();
	}

	public static void scrollthepage(WebElement targetwebele) {
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true)", targetwebele);
	}

	public static void scroll(WebElement element) {
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(false)", element);
	}

	public static void excelread(String sheetname, int rownum, int cellnum) throws IOException {
		File f = new File("excellocation.xlsx");
		FileInputStream fis = new FileInputStream(f);
		Workbook wb = new XSSFWorkbook(fis);
		Sheet mysheet = wb.getSheet("sheet1");
		Row r = mysheet.getRow(rownum);
		Cell c = r.getCell(cellnum);
		int cellType = c.getCellType();

		String value = "";
		if (cellType == 1) {
			String value2 = c.getStringCellValue();

		} else if (DateUtil.isCellDateFormatted(c)) {
			Date date = c.getDateCellValue();
			SimpleDateFormat s = new SimpleDateFormat("dd-MMM-yy");
			String value1 = s.format(date);

		} else {
			double d = c.getNumericCellValue();
			long l = (long) d;
			String valueof = String.valueOf(l);

		}
	}

	public static void createNewExcelFile(int rownum, int cellnum, String newdata) throws IOException {
		File f = new File("C:\\Users\\San\\eclipse-workspace\\SimpleMaven\\Excel\\newfile.xlsx");
		Workbook w = new XSSFWorkbook();
		Sheet newsheet = w.createSheet("sheet1");
		Row newrow = newsheet.createRow(rownum);
		Cell newcell = newrow.createCell(cellnum);
		newcell.setCellValue(newdata);
		FileOutputStream fos = new FileOutputStream(f);
		w.write(fos);
	}

	public static void createcell(int rownum, int cellnum, String newdata) throws IOException {
		File f = new File("C:\\Users\\San\\eclipse-workspace\\SimpleMaven\\Excel\\newfile.xlsx");
		FileInputStream fis = new FileInputStream(f);
		Workbook wb = new XSSFWorkbook(fis);
		Sheet s = wb.getSheet("sheet1");
		Row r = s.getRow(rownum);
		Cell c = r.createCell(cellnum);
		c.setCellValue(newdata);
		FileOutputStream fos = new FileOutputStream(f);
		wb.write(fos);
	}

	public static void createrow(int crerow, int crecell, String newdata) throws IOException {
		File f = new File("C:\\Users\\San\\eclipse-workspace\\SimpleMaven\\Excel\\newfile.xlsx");
		FileInputStream fis = new FileInputStream(f);
		Workbook wb = new XSSFWorkbook(fis);
		Sheet s = wb.getSheet("sheet1");
		Row r = s.createRow(crerow);
		Cell c = r.createCell(crecell);
		c.setCellValue(newdata);
		FileOutputStream fos = new FileOutputStream(f);
		wb.write(fos);
	}

	public static void updatedatatoparticullarcell(int gettherow, int getthecell, String exisitingdata,
			String writenewdata) throws IOException {
		File f = new File("excel location.xlsx");
		FileInputStream fis = new FileInputStream(f);
		Workbook wb = new XSSFWorkbook(fis);
		Sheet s = wb.getSheet("sheet1");
		Row r = s.getRow(gettherow);
		Cell c = r.getCell(getthecell);
		String str = c.getStringCellValue();
		if (str.equals(exisitingdata)) {
			c.setCellValue(writenewdata);
		}
		FileOutputStream fos = new FileOutputStream(f);
		wb.write(fos);
	}
}
