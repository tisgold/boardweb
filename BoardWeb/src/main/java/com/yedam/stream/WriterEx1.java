package com.yedam.stream;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class WriterEx1 {
	public static void main(String[] args) {
//		writer1();
//		reader1();
		
		// 기본스트림 - 보조스트림 - 추가적인 기능 수행
		List<MemberVO> members = new ArrayList<>();
		try {
			FileReader fr = new FileReader("c:/temp/file3.txt");
			BufferedReader br = new BufferedReader(fr); // 한줄씩 읽어오는 기능 활용
			String str = "";
			String[] strAry = null;
			
			while(true) {
				str = br.readLine(); // 한라인 읽기 (101 홍길동 90)
				if(str == null) {
					break;
				}
				// 파일의 정보를 활용 -> 컬렉션 생성
				strAry = str.split(" "); // " "을 기준으로 배열형태로 반환
				MemberVO member = new MemberVO();
				member.setMemberNo(Integer.parseInt(strAry[0]));
				member.setMemberName(strAry[1]);
				member.setPoint(Integer.parseInt(strAry[2]));
				members.add(member);
				//System.out.println(str);
			}
			br.close();
			fr.close();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		members.forEach(System.out::println);
		System.out.println("라인 읽기 완료!");
	}
	
	static void reader1() {
		// 문자기반 읽기 Reader <- FileReader
		try {
			Reader reader = new FileReader("c:/temp/file2.dat");
			while(true) {
				int read = reader.read(); // 반환타입 : char
				if(read == -1) {
					break;
				}
				System.out.print((char) read); // byte, char, short, int, long
				// System.out.println(read + " -> " + (char) read);
			}
			reader.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("문자기반 읽기 완료!");
	}
	
	static void writer1() {
		// 문자기반 스트림 Writer <- FileWriter
		Scanner scn = new Scanner(System.in);
		String str = "";
		try {
			Writer writer = new FileWriter("c:/temp/file2.dat");
			while(true) {
				System.out.print("입력>> ");
				str = scn.nextLine();
				if(str.equals("quit")) {
					break;
				}
				writer.write(str + "\n");
			}
			writer.flush();
			writer.close();
			scn.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("문자기반 쓰기 완료!");
	}
}
