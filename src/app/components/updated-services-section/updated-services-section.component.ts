import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-updated-services-section',
  templateUrl: './updated-services-section.component.html',
  styleUrls: ['./updated-services-section.component.css']
})
export class UpdatedServicesSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getLoadTabsBox();
  }



  getLoadTabsBox(){
    	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
  }

}
