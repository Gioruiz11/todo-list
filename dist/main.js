(()=>{"use strict";let e=(e,t,n,i)=>{let l=crypto.randomUUID();return{getId:()=>l,getTitle:()=>e,getDueDate:()=>t,getPriority:()=>n,getDescription:()=>i,setTitle(e){this.title=e},setDueDate(e){this.duedate=e},setPriority(e){this.priority=e},setDescription(e){this.description=e}}};document.getElementsByClassName("addtask")[0].addEventListener("click",(function(){let e=document.getElementsByClassName("modal")[0];document.getElementsByClassName("addtask")[0].onclick=function(){e.style.display="block"},window.onclick=function(t){t.target==e&&(e.style.display="none")}})),document.getElementsByClassName("submit")[0].addEventListener("click",(function(){let t=document.getElementById("title").value,n=document.getElementById("duedate").value,i=document.getElementById("priority").value,l=document.getElementById("description").value,d=e(t,n,i,l),o=document.getElementsByClassName("todo-container")[0],s=document.createElement("div");s.classList.add("todo");let a=document.createElement("div");a.classList.add("left-side-todo");let c=document.createElement("div");c.classList.add("right-side-todo");let m=document.createElement("div");m.classList.add("priority-image"),"low"==d.getPriority()&&(m.style.borderColor="green"),"medium"==d.getPriority()&&(m.style.borderColor="yellow"),"high"==d.getPriority()&&(m.style.borderColor="red");let r=document.createElement("p");r.textContent=d.getTitle();let u=document.createElement("p");u.textContent=d.getDueDate();let g=document.createElement("img");g.setAttribute("src","../images/pen-to-square-solid.svg");let y=document.createElement("img");y.setAttribute("src","../images/trash-can-solid.svg"),a.append(m,r),c.append(u,g,y),s.append(a,c),o.append(s),a.addEventListener("click",(function(){let e=document.getElementsByClassName("info-modal")[0],t=document.getElementsByClassName("left-side-todo")[0];document.getElementById("info-description"),t.onclick=function(){e.style.display="block"},window.onclick=function(t){t.target==e&&(e.style.display="none")}}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsSUFxQklBLEVBQU8sQ0FBQ0MsRUFBT0MsRUFBU0MsRUFBVUMsS0FHbEMsSUFBSUMsRUFBS0MsT0FBT0MsYUFFaEIsTUFBTyxDQUVIQyxNQUFLLElBQ01ILEVBRVhJLFNBQVEsSUFDR1IsRUFFWFMsV0FBVSxJQUNDUixFQUVYUyxZQUFXLElBQ0FSLEVBRVhTLGVBQWMsSUFDSFIsRUFHWFMsU0FBU1osR0FDTGEsS0FBS2IsTUFBUUEsQ0FDakIsRUFDQWMsV0FBV2IsR0FDUFksS0FBS1osUUFBVUEsQ0FDbkIsRUFDQWMsWUFBWWIsR0FDUlcsS0FBS1gsU0FBV0EsQ0FDcEIsRUFDQWMsZUFBZWIsR0FDWFUsS0FBS1YsWUFBY0EsQ0FDdkIsRUFFSixFQ3REVWMsU0FBU0MsdUJBQXVCLFdBQVcsR0FDakRDLGlCQUFpQixTQ0Z6QixXQUNJLElBQUlDLEVBQVFILFNBQVNDLHVCQUF1QixTQUFTLEdBQzNDRCxTQUFTQyx1QkFBdUIsV0FBVyxHQUVqREcsUUFBVSxXQUNWRCxFQUFNRSxNQUFNQyxRQUFVLE9BQzFCLEVBRUFDLE9BQU9ILFFBQVUsU0FBU0ksR0FDbkJBLEVBQUVDLFFBQVVOLElBQ1hBLEVBQU1FLE1BQU1DLFFBQVUsT0FFOUIsQ0FDSixJRFRhTixTQUFTQyx1QkFBdUIsVUFBVSxHQUNoREMsaUJBQWlCLFNDWXhCLFdBQ0ksSUFBSW5CLEVBQVFpQixTQUFTVSxlQUFlLFNBQVNDLE1BQ3pDM0IsRUFBVWdCLFNBQVNVLGVBQWUsV0FBV0MsTUFDN0MxQixFQUFXZSxTQUFTVSxlQUFlLFlBQVlDLE1BQy9DekIsRUFBY2MsU0FBU1UsZUFBZSxlQUFlQyxNQUVyREMsRUFBVTlCLEVBQUtDLEVBQU9DLEVBQVNDLEVBQVVDLEdBRXpDMkIsRUFBZWIsU0FBU0MsdUJBQXVCLGtCQUFrQixHQUVqRWEsRUFBVWQsU0FBU2UsY0FBYyxPQUNyQ0QsRUFBUUUsVUFBVUMsSUFBSSxRQUV0QixJQUFJQyxFQUFVbEIsU0FBU2UsY0FBYyxPQUNyQ0csRUFBUUYsVUFBVUMsSUFBSSxrQkFFdEIsSUFBSUUsRUFBV25CLFNBQVNlLGNBQWMsT0FDdENJLEVBQVNILFVBQVVDLElBQUksbUJBRXZCLElBQUlHLEVBQWVwQixTQUFTZSxjQUFjLE9BQzFDSyxFQUFhSixVQUFVQyxJQUFJLGtCQUNFLE9BQXpCTCxFQUFRbkIsZ0JBQ1IyQixFQUFhZixNQUFNZ0IsWUFBYyxTQUVULFVBQXpCVCxFQUFRbkIsZ0JBQ1AyQixFQUFhZixNQUFNZ0IsWUFBYyxVQUVULFFBQXpCVCxFQUFRbkIsZ0JBQ1AyQixFQUFhZixNQUFNZ0IsWUFBYyxPQUdyQyxJQUFJQyxFQUFZdEIsU0FBU2UsY0FBYyxLQUN2Q08sRUFBVUMsWUFBY1gsRUFBUXJCLFdBRWhDLElBQUlpQyxFQUFZeEIsU0FBU2UsY0FBYyxLQUN2Q1MsRUFBVUQsWUFBY1gsRUFBUXBCLGFBRWhDLElBQUlpQyxFQUFZekIsU0FBU2UsY0FBYyxPQUN2Q1UsRUFBVUMsYUFBYSxNQUFPLHFDQUU5QixJQUFJQyxFQUFjM0IsU0FBU2UsY0FBYyxPQUN6Q1ksRUFBWUQsYUFBYSxNQUFPLGlDQUVoQ1IsRUFBUVUsT0FBT1IsRUFBY0UsR0FDN0JILEVBQVNTLE9BQU9KLEVBQVdDLEVBQVdFLEdBQ3RDYixFQUFRYyxPQUFPVixFQUFTQyxHQUN4Qk4sRUFBYWUsT0FBT2QsR0FHcEJJLEVBQVFoQixpQkFBaUIsU0FHekIsV0FDSSxJQUFJQyxFQUFRSCxTQUFTQyx1QkFBdUIsY0FBYyxHQUN0RGlCLEVBQVVsQixTQUFTQyx1QkFBdUIsa0JBQWtCLEdBQzFDRCxTQUFTVSxlQUFlLG9CQUc5Q1EsRUFBUWQsUUFBVSxXQUNkRCxFQUFNRSxNQUFNQyxRQUFVLE9BQzFCLEVBRUFDLE9BQU9ILFFBQVUsU0FBU0ksR0FDbkJBLEVBQUVDLFFBQVVOLElBQ1hBLEVBQU1FLE1BQU1DLFFBQVUsT0FFOUIsQ0FDSixHQUNKLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwbGljYXRpb24tbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tY2hhbmdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gcmVhZFxuICAgICAgICBnZXRUaXRsZSgpe1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRBcnJheSgpe1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tBcnJheTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgIHNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VGFzayh0YXNrKXtcbiAgICAgICAgICAgIHRhc2tBcnJheS5wdXNoKHRhc2spXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBUYXNrID0gKHRpdGxlLCBkdWVkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pID0+IHtcbi8vIENSVUQgZmFjdG9yeSBmdW5jdGlvblxuXG4gICAgbGV0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIHJlYWRcbiAgICAgICAgZ2V0SWQoKXtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldER1ZURhdGUoKXtcbiAgICAgICAgICAgIHJldHVybiBkdWVkYXRlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcmlvcml0eSgpe1xuICAgICAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgICAgICB9LFxuICAgICAgICBnZXREZXNjcmlwdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgICAgICB9LFxuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgc2V0VGl0bGUodGl0bGUpe1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB9LFxuICAgICAgICBzZXREdWVEYXRlKGR1ZWRhdGUpe1xuICAgICAgICAgICAgdGhpcy5kdWVkYXRlID0gZHVlZGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpe1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB9LFxuICAgICAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIH0sXG5cbiAgICB9XG5cbn1cblxuXG5cblxuZXhwb3J0e1Rhc2t9O1xuIiwiaW1wb3J0IHtzaG93VGFza01vZGFsLCBhZGRUYXNrVG9ET019IGZyb20gXCIuL2RvbS1jaGFuZ2UuanNcIjtcblxuLy8gbWFrZSB0b2RvIG1vZGFsIGFwcGVhciBvbiBidXR0b24gcHJlc3NcbmxldCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZHRhc2tcIilbMF07XG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93VGFza01vZGFsKTtcbi8vIGFkZCB0YXNrIHRvIERPTSBvbiBzdWJtaXQgY2xpY2tcbmxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3VibWl0XCIpWzBdO1xuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrVG9ET00pOyIsImltcG9ydCB7VGFza30gZnJvbSBcIi4vYXBwbGljYXRpb24tbG9naWMuanNcIjtcblxuZnVuY3Rpb24gc2hvd1Rhc2tNb2RhbCgpe1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbFwiKVswXTtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZHRhc2tcIilbMF07XG4gICAgLy8gb25jbGljaywgbWFrZSBtb2RhbCBhcHBlYXJcbiAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIC8vIGlmIHlvdSBjbGljayBvdXRzaWRlIHdpbmRvdywgbW9kYWwgY2xvc2VzXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgaWYoZS50YXJnZXQgPT0gbW9kYWwpe1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIGFkZHMgY3JlYXRlZCB0YXNrIHRvIERPTSB0byBiZSBkaXNwbGF5ZWRcbmZ1bmN0aW9uIGFkZFRhc2tUb0RPTSgpe1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGVcIikudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIC8vIHRhc2sgb2JqZWN0XG4gICAgbGV0IG5ld1Rhc2sgPSBUYXNrKHRpdGxlLCBkdWVkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pO1xuICAgIC8vIGhvb2sgdG8gaHRtbCBjb250YWluZXJcbiAgICBsZXQgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG8tY29udGFpbmVyXCIpWzBdO1xuXG4gICAgbGV0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIilcblxuICAgIGxldCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoXCJsZWZ0LXNpZGUtdG9kb1wiKTtcblxuICAgIGxldCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXNpZGUtdG9kb1wiKTtcbiAgICBcbiAgICBsZXQgbGVmdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWltYWdlXCIpO1xuICAgICBpZihuZXdUYXNrLmdldFByaW9yaXR5KCkgPT0gXCJsb3dcIil7XG4gICAgICAgIGxlZnRQcmlvcml0eS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9XG4gICAgaWYobmV3VGFzay5nZXRQcmlvcml0eSgpID09IFwibWVkaXVtXCIpe1xuICAgICAgICBsZWZ0UHJpb3JpdHkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInllbGxvd1wiO1xuICAgIH1cbiAgICBpZihuZXdUYXNrLmdldFByaW9yaXR5KCkgPT0gXCJoaWdoXCIpe1xuICAgICAgICBsZWZ0UHJpb3JpdHkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xuICAgIH0gXG5cbiAgICBsZXQgbGVmdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGVmdFRpdGxlLnRleHRDb250ZW50ID0gbmV3VGFzay5nZXRUaXRsZSgpO1xuXG4gICAgbGV0IHJpZ2h0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJpZ2h0RGF0ZS50ZXh0Q29udGVudCA9IG5ld1Rhc2suZ2V0RHVlRGF0ZSgpO1xuXG4gICAgbGV0IHJpZ2h0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmlnaHRFZGl0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2ltYWdlcy9wZW4tdG8tc3F1YXJlLXNvbGlkLnN2Z1wiKTtcblxuICAgIGxldCByaWdodERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmlnaHREZWxldGUuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vaW1hZ2VzL3RyYXNoLWNhbi1zb2xpZC5zdmdcIik7XG5cbiAgICBsZWZ0RGl2LmFwcGVuZChsZWZ0UHJpb3JpdHksIGxlZnRUaXRsZSk7XG4gICAgcmlnaHREaXYuYXBwZW5kKHJpZ2h0RGF0ZSwgcmlnaHRFZGl0LCByaWdodERlbGV0ZSk7XG4gICAgbmV3VG9kby5hcHBlbmQobGVmdERpdiwgcmlnaHREaXYpO1xuICAgIGRpdkNvbnRhaW5lci5hcHBlbmQobmV3VG9kbyk7XG5cbiAgICAvLyBjbGljayBvbiB0b2RvIHRvIHNob3cgaW5mb3JtYXRpb24gb24gbW9kYWxcbiAgICBsZWZ0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHBhbmRUYXNrKTsgXG5cbiAgICAvLyBFeHBhbmQgdGFzayBvbiBjbGljaywgc2hvd3MgZGVzY3JpcHRpb25cbiAgICBmdW5jdGlvbiBleHBhbmRUYXNrKCl7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbmZvLW1vZGFsXCIpWzBdO1xuICAgICAgICBsZXQgbGVmdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsZWZ0LXNpZGUtdG9kb1wiKVswXTtcbiAgICAgICAgbGV0IGluZm9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIG9uY2xpY2ssIG1ha2UgbW9kYWwgYXBwZWFyXG4gICAgICAgIGxlZnREaXYub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHlvdSBjbGljayBvdXRzaWRlIHdpbmRvdywgbW9kYWwgY2xvc2VzXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZihlLnRhcmdldCA9PSBtb2RhbCl7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9OyBcbiAgICB9IFxufVxuXG5leHBvcnQge3Nob3dUYXNrTW9kYWwsIGFkZFRhc2tUb0RPTX07Il0sIm5hbWVzIjpbIlRhc2siLCJ0aXRsZSIsImR1ZWRhdGUiLCJwcmlvcml0eSIsImRlc2NyaXB0aW9uIiwiaWQiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwiZ2V0SWQiLCJnZXRUaXRsZSIsImdldER1ZURhdGUiLCJnZXRQcmlvcml0eSIsImdldERlc2NyaXB0aW9uIiwic2V0VGl0bGUiLCJ0aGlzIiwic2V0RHVlRGF0ZSIsInNldFByaW9yaXR5Iiwic2V0RGVzY3JpcHRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kYWwiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwiZSIsInRhcmdldCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJuZXdUYXNrIiwiZGl2Q29udGFpbmVyIiwibmV3VG9kbyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsZWZ0RGl2IiwicmlnaHREaXYiLCJsZWZ0UHJpb3JpdHkiLCJib3JkZXJDb2xvciIsImxlZnRUaXRsZSIsInRleHRDb250ZW50IiwicmlnaHREYXRlIiwicmlnaHRFZGl0Iiwic2V0QXR0cmlidXRlIiwicmlnaHREZWxldGUiLCJhcHBlbmQiXSwic291cmNlUm9vdCI6IiJ9