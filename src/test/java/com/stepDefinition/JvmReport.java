package com.stepDefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	
	public static void generateJvmReport(String json) {
		File f = new File("C:\\Users\\JANANI\\eclipse-workspace\\Projectmfdesign\\Reports");
		Configuration c = new Configuration(f, "mfdesign login and search functionality report");
		c.addClassifications("Platform", "Windows");
		c.addClassifications("Browser","Chrome");
		c.addClassifications("Version","79.0");
		c.addClassifications("Sprint","3");
		
		List<String> lijson=new ArrayList<String>();
		lijson.add(json);
		
		
		ReportBuilder r = new ReportBuilder(lijson,c);
		r.generateReports();

	}

}
