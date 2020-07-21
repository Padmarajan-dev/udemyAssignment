import { Directive,ElementRef,Renderer2,OnInit,HostListener} from '@angular/core';

@Directive({
  selector: '[goGreen]'
})
export class CustomStyleDirectiveDirective implements OnInit {
  constructor(private Eleref:ElementRef,private render:Renderer2) { }
   
   ngOnInit()
   {
     this.render.setStyle(this.Eleref.nativeElement,'color','blue')
     this.render.setStyle(this.Eleref.nativeElement,'transition','ease-in-out 4s')
   }
   @HostListener('mouseenter')hover(evedata:Event)
   {
    this.render.setStyle(this.Eleref.nativeElement,'color','brown');
    this.render.setStyle(this.Eleref.nativeElement,'transform','scale(-0.3,2)');
   }
   @HostListener('mouseleave')leave(evedata:Event)
   {
    this.render.setStyle(this.Eleref.nativeElement,'color','blue');
    this.render.setStyle(this.Eleref.nativeElement,'transform','none');
   }
}
