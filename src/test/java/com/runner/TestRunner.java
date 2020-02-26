package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.stepDefinition.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources"},glue= {"com.stepDefinition"},monochrome=true,dryRun=false,
strict=false,plugin= {"json:C:\\Users\\JANANI\\eclipse-workspace\\Projectmfdesign\\Reports\\output.json"})
public class TestRunner {
	@AfterClass
	public static void reportGeneration() {
		JvmReport.generateJvmReport("C:\\Users\\JANANI\\eclipse-workspace\\Projectmfdesign\\Reports\\output.json");


}}
