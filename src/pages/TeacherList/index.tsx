import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';
import Select from '../../components/Select';

function TeacherList() {
  const [subject,setSubject] = useState('');
  const [week_day,setWeekDay] = useState('');
  const [time,setTime] = useState('');

  function searchTeachers(e: FormEvent) {
    e.preventDefault();
    console.log({subject,week_day,time});

  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select 
             name="subject" 
             label="Matéria"
             value={subject}             
             onChange={e => { setSubject(e.target.value)}}
             options={[
               { value: 'Artes', label: 'Artes'},
               { value: 'Física', label: 'Física'},
               { value: 'Matemática', label: 'Matemática'},
               { value: 'Biologia', label: 'Biologia'},
               { value: 'Química', label: 'Química'},
             ]} />
            
            <Select 
             name="week-day" 
             label="Dia da Semana"
             value={week_day}
             onChange={e => { setWeekDay(e.target.value)}}             
             options={[
               { value: '0', label: 'Domingo'},
               { value: '1', label: 'Segunda'},
               { value: '2', label: 'Terça'},
               { value: '3', label: 'Quarta'},
               { value: '4', label: 'Quinta'},
               { value: '5', label: 'Sexta'},
               { value: '6', label: 'Sábado'}
             ]} />
          
          <Input 
             type="time" 
             name="time"
             value={time}
             onChange={e => { setTime(e.target.value) }}
             label="Hora" 
          />  

          <button type="submit">
            Buscar
          </button>

        </form>   
        
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />

      </main>
    </div>   
  )
}

export default TeacherList;