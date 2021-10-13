/*
Author: Oyekola Toheeb
Date:   7/17/2021
External javascript to mini_project_gradesheet.html
*/

		function english() {
			 eng = document.getElementById('eng').value;

			if (eng <= 30) {document.getElementById('grade_eng').value = 'F'} 
			else if ((eng >= 31) && (eng <= 40)) {document.getElementById('grade_eng').value = 'E'}		
			else if ((eng >= 41) && (eng <= 49)) {document.getElementById('grade_eng').value = 'D'}
			else if ((eng >= 50) && (eng <= 60)) {document.getElementById('grade_eng').value = 'C'}
			else if ((eng >= 61) && (eng <= 69)) {document.getElementById('grade_eng').value = 'B'}
			else if ((eng >= 70) && (eng <= 100)) {document.getElementById('grade_eng').value = 'A'}
			else {document.getElementById('grade_eng').value = 'Invalid score'}
		}

		function mathematics() {
			 math = document.getElementById('math').value;

			 if (math <= 30) {document.getElementById('math_grade').value = 'F'} 
			else if ((math >= 31) && (math <= 40)) {document.getElementById('math_grade').value = 'E'}		
			else if ((math >= 41) && (math <= 49)) {document.getElementById('math_grade').value = 'D'}
			else if ((math >= 50) && (math <= 60)) {document.getElementById('math_grade').value = 'C'}
			else if ((math >= 61) && (math <= 69)) {document.getElementById('math_grade').value = 'B'}
			else if ((math >= 70) && (math <= 100)) {document.getElementById('math_grade').value = 'A'}
			else {document.getElementById('math_grade').value = 'Invalid score'}
		}

		function chemistry() {
			 chm = document.getElementById('chm').value;

			 if (chm <= 30) {document.getElementById('chm_grade').value = 'F'} 
			else if ((chm >= 31) && (chm <= 40)) {document.getElementById('chm_grade').value = 'E'}		
			else if ((chm >= 41) && (chm <= 49)) {document.getElementById('chm_grade').value = 'D'}
			else if ((chm >= 50) && (chm <= 60)) {document.getElementById('chm_grade').value = 'C'}
			else if ((chm >= 61) && (chm <= 69)) {document.getElementById('chm_grade').value = 'B'}
			else if ((chm >= 70) && (chm <= 100)) {document.getElementById('chm_grade').value = 'A'}
			else {document.getElementById('chm_grade').value = 'Invalid score'}
		}

		function biology() {
			 bio = document.getElementById('bio').value;

			 if (bio <= 30) {document.getElementById('bio_grade').value = 'F'} 
			else if ((bio >= 31) && (bio <= 40)) {document.getElementById('bio_grade').value = 'E'}		
			else if ((bio >= 41) && (bio <= 49)) {document.getElementById('bio_grade').value = 'D'}
			else if ((bio >= 50) && (bio <= 60)) {document.getElementById('bio_grade').value = 'C'}
			else if ((bio >= 61) && (bio <= 69)) {document.getElementById('bio_grade').value = 'B'}
			else if ((bio >= 70) && (bio <= 100)) {document.getElementById('bio_grade').value = 'A'}
			else {document.getElementById('bio_grade').value = 'Invalid score'}	
		}

		function french() {
			 frc = document.getElementById('frc').value;

			 if (frc <= 30) {document.getElementById('frc_grade').value = 'F'} 
			else if ((frc >= 31) && (frc <= 40)) {document.getElementById('frc_grade').value = 'E'}		
			else if ((frc >= 41) && (frc <= 49)) {document.getElementById('frc_grade').value = 'D'}
			else if ((frc >= 50) && (frc <= 60)) {document.getElementById('frc_grade').value = 'C'}
			else if ((frc >= 61) && (frc <= 69)) {document.getElementById('frc_grade').value = 'B'}
			else if ((frc >= 70) && (frc <= 100)) {document.getElementById('frc_grade').value = 'A'}
			else {document.getElementById('frc_grade').value = 'Invalid score'}	
		}
		//Total
		function totalScore(subject1, subject2, subject3, subject4, subject5) {
			 total = Number(subject1) + Number(subject2) + Number(subject3) + Number(subject4) + Number(subject5);
			 return total
		}
		function result() {
			var totalResult = totalScore(eng, math, chm, bio, frc);
			var averageResult = totalScore(eng, math, chm, bio, frc) / 5 ;

				document.getElementById('total_score').innerHTML = totalResult
				document.getElementById('average_score').innerHTML = averageResult

			if (averageResult <= 50) {document.getElementById('remark').innerHTML = ('Failed: You should do better.'); document.getElementById('img').src = 'photos/failed.png';}
			else if ((averageResult >= 50) && (averageResult < 60)) {document.getElementById('remark').innerHTML = ('Passed: You can do better.'); document.getElementById('img').src = 'photos/passed.png';} 
			else if ((averageResult >= 60) && (averageResult < 70)) {document.getElementById('remark').innerHTML = ('Good: You should improve.'); document.getElementById('img').src = 'photos/good.png';}
			else if ((averageResult >= 70) && (averageResult < 80)) {document.getElementById('remark').innerHTML = ('Very Good: Alway aim for the best.'); document.getElementById('img').src = 'photos/very_good.png';} 
			else if ((averageResult >= 80) && (averageResult <= 100)) {document.getElementById('remark').innerHTML = ('Excellent: You have done well, Keep it up.'); document.getElementById('img').src = 'photos/excellent.png';} 
			else {'You didnt sit for this exam'}
		}