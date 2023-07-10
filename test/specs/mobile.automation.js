describe('open application', ()=>{
    it('should open apps', async()=>{
        
    });

    it('input fields - page 1', async () =>{
        await $('id:com.fghilmany.dietmealapp:id/et_name').setValue('Alifyudin');
        await $('id:com.fghilmany.dietmealapp:id/et_weight').setValue(80);
        await $('id:com.fghilmany.dietmealapp:id/et_height').setValue(175);
        await $('id:com.fghilmany.dietmealapp:id/rb_male').click();
        await $('id:com.fghilmany.dietmealapp:id/bt_next').click();
    });

    it('input fields - page 2', async () =>{
        await $('id:com.fghilmany.dietmealapp:id/rb_low_to_medium').click();
        await $('id:com.fghilmany.dietmealapp:id/bt_finish').click();
    })
})