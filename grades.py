import csv
import json

# ---------------
# CONFIG SETTINGS
# ---------------
grades_input_csv = 'fall2022.csv'
grades_output_csv = 'fall2022_db.csv'
course_information_json = 'course_information.json'
# ----------
# END CONFIG
# ----------
print(f'This script reads from {grades_input_csv}, overwrites to {grades_output_csv}, and overwrites lists of subjects, courses, and instructors to {course_information_json}.')
print(f'The course information file is not used and may be discarded (indexes are now generated from the database itself).')
input('Press any key to continue or CTRL-C to exit . . .')

subjects = set()
courses_with_subjects = set()
instructors = set()

with open(grades_input_csv, mode='r') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    with open(grades_output_csv, mode='w') as csv_db_file:
        csv_writer = csv.writer(csv_db_file, delimiter=';', quotechar='"', 
                quoting=csv.QUOTE_MINIMAL)
        line_count = 0
        subject = ''
        subject_desc = ''
        course_num = 0
        title = ''
        academic_period = 0
        academic_period_desc = ''
        for row in csv_reader:
            if(row[0] == ''):
                row[0] = subject
            else:
                subject = row[0]
                subjects.add(subject)
            if(row[1] == ''):
                row[1] = subject_desc
            else:
                subject_desc = row[1]
            if(row[2] == ''):
                #print(f'updating course to {course_num}')
                row[2] = course_num
            else:
                #print(f'setting course to {row[2]}')
                course_num = row[2]
                courses_with_subjects.add(row[0] + " " + course_num)
            if(row[3] == ''):
                row[3] = title
            else:
                title = row[3]
            if(row[4] == ''):
                row[4] = academic_period
            else:
                academic_period = row[4]
            if(row[5] == ''):
                #print(f'updating period desc to {academic_period_desc}')
                row[5] = academic_period_desc
            else:
                #print(f'setting period desc to {row[5]}')
                academic_period_desc = row[5] 

            instructors.add(row[8])

            csv_writer.writerow(row)
            line_count += 1


        print(f'Processed {line_count} lines with {len(subjects)} subjects, {len(courses_with_subjects)} courses, and {len(instructors)} instructors.')

data = {}
data['subjects'] = list(subjects)
data['courses'] = list(courses_with_subjects)
data['instructors'] = list(instructors)
with open(course_information_json, 'w') as json_file:
    json.dump(data, json_file)
    #subjects_file.write(str(subjects))
